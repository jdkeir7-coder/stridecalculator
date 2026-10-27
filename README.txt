STRIDE CALCULATOR — SEO HOMEPAGE REPAIR

Upload ALL files in this ZIP to the root of your GitHub Pages repository.
The entire Pace Conversion Tool now lives in index.html, so stridecalculator.com/
shows the calculator directly and is the self-canonical indexable homepage.

Completed:
1. Replaced the homepage meta-refresh/noindex stub with the actual tool.
2. Canonical homepage is https://stridecalculator.com/ and menus point to ./.
   Old pace-conversion.html and conversions.html have compatibility redirects.
   Old about.html directs to about-faq.html.
   IMPORTANT: GitHub Pages only supports HTML/JS redirects; it cannot provide
   real 301 responses without adding a separate proxy/host-level redirect service.
3. Main 'Convert your pace, instantly.' headline is now H1; chart title is H2,
   preserving their previous visual styles.
4. Improved homepage title and meta description.
5. Added favicon.svg using the exact header-logo geometry; linked on all pages.

Also updates sitemap.xml to list the canonical homepage root URL.
All seven pacing guides and the split calculator remain independent pages.

After publishing: check https://stridecalculator.com/ renders the full calculator,
verify favicon and page source, then inspect homepage in Search Console and
resubmit sitemap.xml. Re-run the SEO audit against the root homepage URL.
