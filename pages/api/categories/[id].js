import dbConnect from "../../../utils/dbConnect";
import Category from "../../../models/Category";

dbConnect();

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "PUT":
      try {
        const category = await Category.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });
        res.status(200).json({ success: true, data: category });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};
