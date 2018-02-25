module.exports = function(sequelize, DataTypes) {

    var annotations = sequelize.define('annotations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        distributionrunfiles_id: DataTypes.INTEGER,
        pagenumber: DataTypes.INTEGER,
        reviewers_id: DataTypes.INTEGER,
        text: DataTypes.STRING
    }, {
      timestamps: true,
      createdAt:  'datetimecreated',
      updatedAt: 'datetimeedited'
    });




annotations.associate = function (db) {
db.annotations.belongsTo(db.distributionrunfiles, {foreignKey: 'distributionrunfiles_id'});
db.distributionrunfiles.hasMany(db.annotations, {foreignKey: 'distributionrunfiles_id'});

};
    return annotations;

};
