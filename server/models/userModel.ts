import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@config/sequelize";

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
    // Model attributes are defined here
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
      type: new DataTypes.STRING(256), // You might choose a different length depending on the hash algorithm
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
    // If you want to add hooks for hashing the password
    hooks: {
      beforeCreate: (user: User) => {
        // Hash the password here
        // e.g., user.password = hashFunction(user.password);
      },
    },
  }
);

export default User;
