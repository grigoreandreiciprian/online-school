import { Sequelize } from "sequelize";

import User from "../models/User.js";

import Course from "../models/course.js";

import Enrolment from "../models/enrolment.js";

import blog from "../models/blog.js";

import Role from "../models/Role.js";

import dotenv from "dotenv";

dotenv.config();

const conectDb = () => {
  try {
    let sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
      }
    );

    let db = {
      models: {},
    };

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    db.models.User = User(sequelize);

    db.models.Course = Course(sequelize);

    db.models.Enrolment = Enrolment(sequelize);

    db.models.blog = blog(sequelize);

    db.models.Role = Role(sequelize);

    db.models.User.hasMany(db.models.Enrolment, {
      onDelete: "CASCADE",
      as: "fk_User_id",

      foreignKey: {
        fieldName: "User_id",
        allowNull: false,
      },
    });

    db.models.Enrolment.belongsTo(db.models.User, {
      as: "fk_User_id",
      foreignKey: {
        fieldName: "User_id",
        allowNull: false,
      },
    });

    db.models.Course.hasMany(db.models.Enrolment, {
      onDelete: "CASCADE",
      as: "fk_course_id",

      foreignKey: {
        fieldName: "course_id",
        allowNull: false,
      },
    });

    db.models.Enrolment.belongsTo(db.models.Course, {
      as: "fk_course_id",

      foreignKey: {
        fieldName: "course_id",
        allowNull: false,
      },
    });

    db.models.Role.hasOne(db.models.User, {
      foreignKey: {
        fieldName: "role_id",
        allowNull: false,
      },
    });

    return db;
  } catch (e) {
    throw new Error(e);
  }
};

let db = conectDb();

export default db;
