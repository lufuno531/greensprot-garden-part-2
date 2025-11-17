GreenSprout Community Garden -- Website

This is a 5-page responsive websitedeveloped for the GreenSprout
Community Garden Initiative. It was built with HTML and CSS to showcase
the organisation's mission, projects, and resources.


 Project Structure

    GreenSprout-Website/
   │  index.html   ,Home page
   about.html   , About Us page
   products.html  , Products & Services
  gallery.html ,Project & Event Gallery
 resources.html , Resources & Events
 contact.html  ,Contact page with form & map



 Page Details

1Home Introduction, mission, quick overview.\
2  About UsHistory, mission & vision, team members.\
3  Products/Services Garden kits, compost bins, organic
    fertilizer, tool rentals.\
4 Gallery  Community projects, volunteer spotlights, before &
    after, harvest celebrations, videos.\
5  Resources & Events- Guides, tutorials, and upcoming
    workshops.\
6 Contact Us Address, Google Map embed, contact form, volunteer
    sign-up.


 Features

-   Responsive design using SS Grid & Flexbox.\
-   Consistent navigation menu across all pages.\
-   Semantic HTML for accessibility.\
-   Placeholder images and YouTube embeds (replace with real media).\
-   Contact form (non-functional by default, requires backend
    integration).

How to Use

1Download or clone this project folder.\
2 Open `index.html` in your browser.\
3 Navigate between pages using the top navigation menu.\
4  Replace placeholder images in the `/images` folder with your real
  content.\
5  Update links (YouTube, Google Maps, PayFast, etc.) with real
    organisational data.

 Next Steps

  Add backend form handling.\
  Enhance styling with animations .\
  Expand the Resources page with downloadable PDFs and more videos.\
  Connect donation button to PayFast or chosen payment gateway.

 Credits

Developed for GreenSprout Community Garden Initiative (2025) to
support community gardening, education, and sustainable food systems.


part 2


## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/greensprout_website.git
    cd greensprout_website
    ```

2. **Open the Website**:
   - Simply open `index.html` in a web browser to view the homepage.
   - All pages are linked together, and you can navigate between them using the menu at the top of each page.

3. **Edit and Customize**:
   - Modify the `index.html` and other pages as needed to update content.
   - Update the `style.css` file in the `css` folder for any changes in design.

4. **Responsive Design**:
   - The website is built to be responsive, adjusting for different screen sizes (desktop, tablet, and mobile). Test and modify styles as necessary to improve responsiveness.

## Usage

- **Navigation**: Use the top navigation menu to access different pages of the website, such as "About Us", "Products", "Gallery", "Resources", and "Contact".
- **Gallery**: The gallery page showcases various community events and gardening activities.
- **Products**: The products page highlights items like garden starter kits, compost bins, and tools available for the community.

## Changelog

### Version 1.0 (Initial Release)
- **Homepage**: Created with a brief introduction to GreenSprout and navigation to other pages.
- **About Us Page**: Describes the mission and history of GreenSprout.
- **Products Page**: Lists garden-related products for sale or use.
- **Gallery Page**: Features community events, workshops, and gardening photos.
- **Contact Us Page**: Includes location, phone number, email, and a contact form for inquiries.

### Version 1.1 (Styling Enhancements)
- Improved typography for better readability.
- Updated the color scheme to match the GreenSprout branding.
- Added hover effects on links and buttons for better user interaction.

### Version 1.2 (Responsive Design Updates)
- Added media queries to improve mobile responsiveness.
- Optimized images for mobile devices using `srcset`.
- Simplified the layout for mobile screens, reducing the number of columns.

### Version 1.3 (Accessibility Improvements)
- Ensured color contrast meets WCAG standards for better visibility.
- Added `aria-labels` and improved HTML semantics for better screen reader support.

---

## Licenses

This project is open-source and available under the MIT License. See [LICENSE](LICENSE) for more details.


part 3 


# GreenSprout Community Garden - Part 3 Build

This build includes JavaScript interactivity, SEO improvements, forms with client-side validation, and gallery lightbox as required for Part 3.

## What was added
- JavaScript: hamburger menu, FAQ accordion, gallery lightbox, product search filter, form validation and feedback.
- SEO: added title tags, meta descriptions, keywords, image alt attributes, robots.txt and sitemap.xml included.
- Forms: contact.html and enquiry.html with client-side JS validation (demo responses).

## Improvements from Part 2 Feedback
| Feedback Issue | Improvement Implemented |
|---|---|
| Missing documentation of Part 2 fixes | Detailed changelog entries added to README |
| Navigation inconsistency | Unified nav across pages; responsive hamburger menu implemented |
| No pseudo-selectors | Added :hover, :focus, :active styles for interactive elements |
| Responsive nav issues | Media queries added; mobile-friendly stacked nav with hamburger |
| Typography spacing | Adjusted font sizes, padding and letter-spacing in CSS |
| Missing references | References section added below |

## Changelog (sample entries)
- Added JS interactivity (hamburger, accordion, lightbox)
- Implemented client-side validation for contact and enquiry forms
- Added search filter for products and reviews section
- Updated README with Part 3 documentation and commit examples

## SEO files included
- robots.txt
- sitemap.xml

## Commit Message Examples
git commit -m "Add hamburger menu and responsive nav (Part 3)"
git commit -m "Implement gallery lightbox and FAQ accordion"
git commit -m "Add form validation and AJAX demo responses"

---

## References
- MDN Web Docs – CSS and JavaScript guides
- Leaflet / Google Maps docs (if implementing maps)
- Course materials (WEDE5020 POE)
