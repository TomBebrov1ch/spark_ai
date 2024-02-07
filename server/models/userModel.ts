import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@config/sequelize";
import bcryptjs from "bcryptjs";

const saltRounds = 10;

// These are all the attributes in the User model
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string; // Add password attribute
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string; // Add password attribute

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(256),
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
    modelName: "user",
    hooks: {
      beforeCreate: async (user) => {
        try {
          console.log("Hashing password for user:", user.email);
          const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
          console.log(hashedPassword);
          user.password = hashedPassword;
        } catch (error) {
          console.error("Error hashing password:", error);
          throw error;
        }
      },
    },
  }
);

export default User;
