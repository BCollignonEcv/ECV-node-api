'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{
        id: uuidv4(),
        name: "Super Admin",
        description: "Super administrator can do everything",
        disableSource: true,
        createSource: true,
        updateSource: true,
        deleteSource: true,
        deleteUser: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: uuidv4(),
        name: "Admin",
        description: "Administrator can create, update and disabled sources",
        disableSource: true,
        createSource: true,
        updateSource: true,
        deleteSource: false,
        deleteUser: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: uuidv4(),
        name: "Fixer",
        description: "Fixer can update and disabled sources",
        disableSource: true,
        createSource: false,
        updateSource: true,
        deleteSource: false,
        deleteUser: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Users', [{
        id: uuidv4(),
        firstname: "admin",
        lastname: "admin",
        email: "admin@admin.fr",
        username: "admin",
        password: await bcrypt.hash("admin", 10),
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Sources', [{
      id: uuidv4(),
      enable: true,
      name: "Indeed",
      baseUrl: "https://fr.indeed.com/emplois",
      location: "l",
      search: "q",
      jobContainer: "div.mosaic-provider-jobcards > a",
      titleTag: "h2.jobTitle span[title]",
      companyTag: "span.companyName",
      salaryTag: "div.salary-snippet span",
      urlTag: "h2.jobTitle",
      locationTag: "div.companyLocation",
      dateTag: "span.date",
      descriptionTag: "div.job-snippet",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      enable: false,
      name: "linkedin",
      baseUrl: "https://www.linkedin.com/jobs/search/",
      location: "location",
      search: "keywords",
      jobContainer: ".jobs-search-results__list > li.jobs-search-results__list-item",
      titleTag: "job-card-list__title",
      companyTag: "job-card-container__company-name",
      urlTag: "job-card-container__company-name",
      createdAt: new Date(),
      updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Sources', null, {});
  }
};
