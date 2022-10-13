import { Sequelize } from "sequelize";

export default (sequelize) => {
  class Course extends Sequelize.Model {}

  Course.init(
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      courseName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to CourseName",
          },

          notEmpty: {
            msg: "Provide a value CourseName",
          },
        },
      },

      creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Creator id",
          },

          notEmpty: {
            msg: "Provide a value to createtor id",
          },
        },
      },

      creatorPicture: {
        type: Sequelize.BLOB("long"),
      },

      creatorFirstName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Creator first",
          },

          notEmpty: {
            msg: "Provide a value to creator first",
          },
        },
      },

      creatorLastName: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Creator last",
          },

          notEmpty: {
            msg: "Provide a value to creator last",
          },
        },
      },

      lectures: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Lectures",
          },

          notEmpty: {
            msg: "Provide a value to Lectures",
          },
        },
      },

      hours: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Hours",
          },

          notEmpty: {
            msg: "Provide a value to Hours",
          },
        },
      },

      totalPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to Total price",
          },

          notEmpty: {
            msg: "Provide a value to Total price",
          },
        },
      },

      perMonth: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to per month",
          },

          notEmpty: {
            msg: "Provide a value to pet mounth",
          },
        },
      },

      minEffort: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to min effort",
          },

          notEmpty: {
            msg: "Provide a value to min effort",
          },
        },
      },

      maxEffort: {
        type: Sequelize.INTEGER,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to max effort",
          },

          notEmpty: {
            msg: "Provide a value to max effort",
          },
        },
      },

      category: {
        type: Sequelize.STRING,
        allowNull: false,

        validate: {
          notNull: {
            msg: "Provide a value to category",
          },

          notEmpty: {
            msg: "Provide a value to category",
          },
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );

  return Course;
};
