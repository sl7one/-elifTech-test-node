const { History } = require('../../models/history');

const setHistory = async (req, res, next) => {
  const { dishes, ...rest } = req.body;
  try {
    const result = await History.create({ ...rest, dishes: JSON.parse(dishes) });

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

module.exports = setHistory;
