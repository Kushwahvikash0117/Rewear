# ReWear – Community Clothing Exchange 👕♻️

### 💡 Problem Statement:
**ReWear** is a web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system. The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.

#### Key Features:
- User authentication and dashboard
- List, browse, and manage clothing items
- Cloudinary image upload for item photos
- Swap requests with accept/reject logic
- Points-based redemption system
- Admin moderation (optional)
- Email notifications (planned)

---

### 👥 Team Members – Odoo Hackathon 2025:

| Name           | GitHub Username   |
|----------------|-------------------|
| Kritika Joshi  | [kritika8006](https://github.com/kritika8006) |
| Mohit Gangwar  | [ek-mohit](https://github.com/ek-mohit)       |
| Pooja Rani     | [pooja2188](https://github.com/pooja2188)     |

---

### 📁 Tech Stack:
- **Frontend:** React, Tailwind CSS (planned)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Cloud Storage:** Cloudinary
- **Auth:** JWT + bcrypt
- **Email Service:** Nodemailer
- **File Upload:** express-fileupload + multer

---

### 🚀 How to Run the Project (Backend)

1. Clone this repo
2. Navigate to the `backend/` folder
3. Create a `.env` file and add:

```env
MONGODB_URI=mongodb+srv://vikashvk0117:NJ6hlHB56fzMDgw6@rewear.gkc73p8.mongodb.net/
JWT_SECRET=a-string-secret-at-least-256-bits-long
CLOUDINARY_CLOUD_NAME=dnls18jc8
CLOUDINARY_API_KEY=231488716576726
CLOUDINARY_API_SECRET=jpI2-iNrq-mFrxbDNt8YAqX_uMw
EMAIL_USER=vikash.vk.0117@gmail.com
EMAIL_PASS=abcdefghijklmnop
