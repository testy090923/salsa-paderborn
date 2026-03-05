// GROQ queries for salsa-paderborn.de
// All queries are centralized here for maintainability.
// Reference: https://www.sanity.io/docs/groq

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

/** All future events, sorted by date ascending. */
export const allEventsQuery = `
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    date,
    endDate,
    category,
    location,
    city,
    description,
    price,
    image,
    link,
    organizer->{name, slug}
  }
`;

/** Single event by slug. */
export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    endDate,
    category,
    location,
    city,
    description,
    details,
    price,
    image,
    link,
    organizer->{name, slug, location}
  }
`;

// ---------------------------------------------------------------------------
// Courses
// ---------------------------------------------------------------------------

/**
 * All courses, sorted by level in a custom order:
 * Anfaenger (1), Mittelstufe (2), Fortgeschritten (3), Alle (4).
 * GROQ select() maps each level string to a numeric sort key.
 */
export const allCoursesQuery = `
  *[_type == "course"] | order(
    select(
      level == "Anfänger" => 1,
      level == "Mittelstufe" => 2,
      level == "Fortgeschritten" => 3,
      level == "Alle" => 4
    ) asc,
    title asc
  ) {
    _id,
    title,
    slug,
    category,
    level,
    style,
    schedule,
    startDate,
    location,
    description,
    partnerRequired,
    image,
    teacher->{name, slug},
    school->{name, slug}
  }
`;

/** Single course by slug with fully resolved references. */
export const courseBySlugQuery = `
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    level,
    style,
    schedule,
    startDate,
    location,
    description,
    partnerRequired,
    image,
    teacher->{name, slug, photo, styles},
    school->{name, slug, location}
  }
`;

// ---------------------------------------------------------------------------
// Teachers
// ---------------------------------------------------------------------------

/** All teachers with their school reference resolved. */
export const allTeachersQuery = `
  *[_type == "teacher"] | order(name asc) {
    _id,
    name,
    slug,
    photo,
    styles,
    bio,
    contact,
    website,
    school->{name, slug}
  }
`;

/**
 * Single teacher by slug.
 * Includes a reverse-reference lookup for all courses taught by this teacher.
 */
export const teacherBySlugQuery = `
  *[_type == "teacher" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    photo,
    styles,
    bio,
    contact,
    website,
    school->{name, slug},
    "courses": *[_type == "course" && teacher._ref == ^._id] | order(title asc) {
      _id,
      title,
      slug,
      level,
      style,
      schedule,
      location
    }
  }
`;

// ---------------------------------------------------------------------------
// Dance Schools
// ---------------------------------------------------------------------------

/** All dance schools. */
export const allSchoolsQuery = `
  *[_type == "danceSchool"] | order(name asc) {
    _id,
    name,
    slug,
    logo,
    focus,
    location,
    description,
    angebot,
    website,
    contact
  }
`;

/**
 * Single dance school by slug.
 * Includes reverse-reference lookups for related events and courses.
 */
export const schoolBySlugQuery = `
  *[_type == "danceSchool" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    logo,
    focus,
    location,
    description,
    angebot,
    website,
    contact,
    "events": *[_type == "event" && organizer._ref == ^._id && date >= now()] | order(date asc) {
      _id,
      title,
      slug,
      date,
      category,
      location,
      city,
      description,
      price,
      image
    },
    "courses": *[_type == "course" && school._ref == ^._id] | order(title asc) {
      _id,
      title,
      slug,
      level,
      style,
      schedule,
      location,
      teacher->{name, slug}
    }
  }
`;

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

/** All blog posts sorted by publish date, newest first. */
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    image,
    tags,
    author->{name, slug}
  }
`;

/** Single blog post by slug with fully resolved author. */
export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    image,
    tags,
    author->{name, slug, photo, styles, bio}
  }
`;

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

/**
 * Homepage data: next 3 upcoming events and 2 featured courses.
 * Uses GROQ's object projection to return both in a single query.
 */
export const homepageQuery = `
  {
    "events": *[_type == "event" && date >= now()] | order(date asc) [0...3] {
      _id,
      title,
      slug,
      date,
      category,
      location,
      city,
      description,
      price,
      image,
      organizer->{name, slug}
    },
    "courses": *[_type == "course"] | order(
      select(
        level == "Anfänger" => 1,
        level == "Mittelstufe" => 2,
        level == "Fortgeschritten" => 3,
        level == "Alle" => 4
      ) asc
    ) [0...2] {
      _id,
      title,
      slug,
      level,
      style,
      schedule,
      location,
      teacher->{name, slug},
      school->{name, slug}
    }
  }
`;
