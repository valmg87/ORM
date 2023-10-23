const router = require("express").Router();
const { Tag, Product } = require("../../models");


router.get("/",(req, res) => {
  try {
    Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tags not found!" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tag not found!" });
  }
});

// Create a new tag
router.post("/", (req, res) => {
   Tag.create({
    tag_name:req.body.tag_name
  })
  .then(categoryData => res.json(categoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.put('/:id', (req, res) => {

  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that ID.' });
      return;
    }
    res.json(categoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id
      }
    })
.then(categoryData => {
  if (!categoryData) {
      res.status(404).json({ message: "No tag found with this id!" });
    return;
  }
  res.json(categoryData);
})
  .catch (err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
