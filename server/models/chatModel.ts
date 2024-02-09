import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "@config/sequelize";

interface ChatAttributes {
  title: string;
  time: string;
  lastMessage: string;
}

class Chat extends Model<ChatAttributes> implements ChatAttributes {
  public title!: string;
  public time!: string;
  public lastMessage!: string;
}

// Chat.init({});
