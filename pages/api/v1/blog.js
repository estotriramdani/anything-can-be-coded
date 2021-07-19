const mongoose = require('mongoose');
mongoose
  .connect(
    'mongodb+srv://estotriramdani:wi5FPjdPgjN0qkAf@cluster0.gupjv.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .catch((err) => console.log(err));

const BlogPost = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  const currentPage = parseInt(req.query.currentPage) || 1;
  const perPage = parseInt(req.query.perPage) || 5;
  let totalItems;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return BlogPost.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      if (result.length === 0) {
        result = 'Tidak ada data post';
      }
      res.status(201).json({
        message: 'Blog post berhasil diambil',
        total_data: totalItems,
        per_page: perPage,
        currentPage: currentPage,
        data: result,
      });
    });
}

export default handler;
