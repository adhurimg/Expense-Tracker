const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('back-end', 'kk', '', {
    host: 'localhost',
    dialect: 'postgres',
});

const Income = sequelize.define('Income', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
        validate: {
            len: [1, 50],
        },
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            max: 99999999999999999999,
        },
    },
    type: {
        type: DataTypes.STRING,
        defaultValue: 'income',
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        trim: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 20],
        },
    },
}, { timestamps: true });

(async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Income model synchronized with the database.');
    } catch (error) {
        console.error('Unable to synchronize the Income model with the database:', error);
    }
})();

module.exports = Income;
