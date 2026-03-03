---
name: deploy-check
description: Prüft ob die Website deployment-ready ist – Build, Qualität, Rechtliches, Performance
---

# Deploy-Check

Führe eine vollständige Deployment-Readiness-Prüfung durch:

1. **Build-Test:**
   ```bash
   npm run build
   ```
   Bricht der Build fehlerfrei durch?

2. **Beauftrage den QA Reviewer** mit einer vollständigen Prüfung (alle 6 Prüfbereiche).

3. **Prüfe selbst:**
   - Ist `netlify.toml` korrekt konfiguriert?
   - Sind Impressum und Datenschutz vorhanden? (Rechtspflicht!)
   - Sind alle Platzhalter-Texte ersetzt?
   - Sind alle TODO-Kommentare im Code aufgelöst?
   - Ist die Sitemap korrekt?
   - Ist `robots.txt` vorhanden?

4. **Präsentiere Andy das Ergebnis:**

```
## Deploy-Check Ergebnis

### Status: READY / NOT READY

### Kritische Blocker (müssen vor Deployment gefixt werden)
- [Liste oder "Keine"]

### Empfehlungen (sollten gefixt werden)
- [Liste oder "Keine"]

### Nice-to-haves (können später)
- [Liste oder "Keine"]
```

5. Wenn READY: Sage Andy die Deployment-Schritte:
   ```bash
   git add -A
   git commit -m "feat: ready for initial deployment"
   git push origin main
   ```
   Netlify deployed automatisch nach Push auf `main`.
