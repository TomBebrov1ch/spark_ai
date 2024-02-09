import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/sequelize";

interface ChatAttributes {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  lastMessage: string;
  lastMessageTime: Date;
  aiSessionId?: string;
}

interface ChatAttributesCreation extends Optional<ChatAttributes, "id"> {}

class Chat extends Model<ChatAttributes> {
  public id!: string;
  public title!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public lastMessage!: string;
  public lastMessageTime!: Date;
  public aiSessionId?: string;
}

Chat.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    lastMessage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastMessageTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    aiSessionId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Chat",
  }
);

export default Chat;
