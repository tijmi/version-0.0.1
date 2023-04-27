module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailverification: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pfp: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "defualtpfp.jpg",
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "hi I'm using",
    },
  });
  //Users.associate = (models) => {
  //  Users.hasMany(models.Likes, {
  //    onDelete: "cascade",
  //  });
  //  Users.hasMany(models.followers, {
  //    onDelete:"cascade"
  //  })
  //};
  return Users;
};
