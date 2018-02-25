module.exports = function(sequelize, DataTypes) {


    var distributionrunfiles = sequelize.define('distributionrunfiles', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        distributionruns_id: DataTypes.INTEGER,
        physicians_id: DataTypes.STRING,
        physiciangroups_id: DataTypes.INTEGER,
        filename: DataTypes.STRING
    }, {
        timestamps: false
    });

    return distributionrunfiles;

};
