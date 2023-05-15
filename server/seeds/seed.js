const db = require('../config/connection');
const User = require('../models/User');
const usersData = require('./Users.json');

async function seedDatabase() {
  try {
    await db;

    // Remove existing users
    await User.deleteMany({});

    // Insert the usersData into the database
    const users = await User.insertMany(usersData);

    console.log('Users seeded!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();