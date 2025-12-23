CONTEXT.md (Final Clean Version)
Project Overview

This project builds the website for Infused Cigar KC, using all files stored in:

C:\Users\Doug\Documents\Cigar3

All images, CSS, JS, and HTML should be referenced locally from this directory using relative paths (example: background.jpg, not a full Windows path).

Navigation Requirements

The website must have only three navigation tabs:

About

Types of Cigars

Events We Cater To

Centered below these three tabs, include one additional button:

Schedule an Event

About Section Content

When the user clicks About, display the following text exactly:

We created Infused Cigar KC to bring a uniquely elevated cigar experience to Kansas City—one that blends craftsmanship, hospitality, and flavor. Every cigar is hand-infused in small batches, ensuring a smooth, memorable draw that appeals to enthusiasts and first-time cigar guests. From upscale celebrations to KC's most vibrant events, our goal is to make premium cigars accessible, enjoyable, and unforgettable for all who gather around them.

Types of Cigars Section

When the user clicks Types of Cigars, show each product as a separate selectable item with its own description.

Buffalo Trace Straight Bourbon Whiskey

Experience the rich, smooth flavor of our Buffalo Trace infused cigars. These premium cigars are carefully infused with the distinctive notes of Buffalo Trace Straight Bourbon Whiskey, creating a unique and memorable smoking experience.

Blanton's Single Barrel

Indulge in the exceptional quality of our Blanton's Single Barrel infused cigars. Each cigar is crafted to complement the complex, full-bodied character of Blanton's Single Barrel bourbon, offering a sophisticated and refined taste.

Woodford Reserve Double Oak

Discover the bold and robust flavors of our Woodford Reserve Double Oak infused cigars. The double-barrel aging process of Woodford Reserve creates a unique profile that perfectly enhances the premium tobacco, delivering an unparalleled smoking experience.

Jack Daniel's Old No. 7

Savor the classic, smooth taste of our Jack Daniel's Old No. 7 infused cigars. These premium cigars are expertly infused with the iconic flavors of Jack Daniel's Tennessee Whiskey, delivering a timeless and satisfying smoking experience.

Patron Tequila

Enjoy the refined elegance of our Patron Tequila infused cigars. Crafted with precision, these premium cigars are infused with the smooth, premium notes of Patron Tequila, creating a sophisticated and distinctive flavor profile.

Conundrum Red Wine (Wagner Family, Maker of Caymus)

Experience the luxurious complexity of our Conundrum Red Wine infused cigars. From the renowned Wagner Family, makers of Caymus, these cigars are infused with the rich, full-bodied character of Conundrum Red Wine, offering a truly exceptional and refined smoking experience.

Events We Cater To

Use the following event types as clickable cards/buttons:

Weddings

Bachelor & Bachelorette Parties

Corporate Events

Private Parties

Birthday Celebrations

Cigar & Whiskey Pairing Events

Golf Tournaments

VIP Experiences

Food Trucks

Tailgating

Hunting Trips

Back Porch Gatherings

Schedule an Event — Form Requirements

When users click Schedule an Event, open a modal containing these fields:

Name

Email

Phone

Event Type (use the same event types listed above)

Event Date

Additional Information (textarea)

Form styling should match the premium aesthetic.

Background Image Requirements

A faded background image must appear behind the entire website.

Image Location

Place the image file in:

C:\Users\Doug\Documents\Cigar3\background.jpg

Usage Rules

Image should fill the screen (full-width, full-height).

Should appear softly faded, not overpowering the content.

Should remain fixed while scrolling.

Must be responsive across all devices.

CSS Requirements

Cursor must apply the following:

body {
    background: url('background.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
}

/* Fade overlay */
.background-fade-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55); /* adjustable fade */
    z-index: -1;
    pointer-events: none;
}

HTML Requirement

Place this inside the <body> tag:

<div class="background-fade-overlay"></div>

General Styling Requirements

Maintain a luxury, high-end aesthetic.

Ensure text remains readable over the faded image.

Buttons should have clean hover effects.

Everything must be mobile-responsive.

Ensure all spelling and spacing is correct.