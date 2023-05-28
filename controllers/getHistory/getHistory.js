const { History } = require('../../models/history');

const getHistory = async (req, res, next) => {
  try {
    const result = await History.find({});

    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getHistory;
