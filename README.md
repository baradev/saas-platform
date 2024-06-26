# Imaginify

  <img src="./public/logo-github.png" alt="Project Banner">
An AI SaaS Platform

Imaginify offers comprehensive image processing capabilities, integrates a secure payment infrastructure, and provides advanced image search functionalities. It supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.

## Tech Stack

- **Next.js**
- **TypeScript**
- **MongoDB**
- **Clerk**
- **Cloudinary**
- **Stripe**
- **Shadcn**
- **TailwindCSS**

## Features

- **Authentication and Authorization**: Secure user access with registration, login, and route protection.
- **Community Image Showcase**: Explore user transformations with easy navigation using pagination.
- **Advanced Image Search**: Find images by content or objects present inside the image quickly and accurately.
- **Image Restoration**: Revive old or damaged images effortlessly.
- **Image Recoloring**: Customize images by replacing objects with desired colors easily.
- **Image Generative Fill**: Fill in missing areas of images seamlessly.
- **Object Removal**: Clean up images by removing unwanted objects with precision.
- **Background Removal**: Extract objects from backgrounds with ease.
- **Download Transformed Images**: Save and share AI-transformed images conveniently.
- **Transformed Image Details**: View details of transformations for each image.
- **Transformation Management**: Control over deletion and updates of transformations.
- **Credits System**: Earn or purchase credits for image transformations.
- **Profile Page**: Access transformed images and credit information personally.
- **Credits Purchase**: Securely buy credits via Stripe for uninterrupted use.
- **Responsive UI/UX**: A seamless experience across devices with a user-friendly interface.
- **And many more, including code architecture and reusability**

## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone git@github.com:baradev/saas-platform.git
cd saas-platform
```

### Installation

Install the project dependecies with npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```bash
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

```

Replace the placeholder values with your actual account credentials. You can obtain these credentials by signing up on the Clerk, MongoDB, Cloudinary, and Stripe websites.

### Running the Project

```bash
npm run dev
```

---

**Note:** Inspiration and guidance for this project comes from JS Mastery.
