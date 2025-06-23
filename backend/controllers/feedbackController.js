const Feedback = require('../models/Feedback');

exports.getAll = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('user', 'name').populate('conference', 'title');
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.create = async (req, res) => {
    try {
        const { conference, message } = req.body;
        const feedback = await Feedback.create({ user: req.user._id, conference, message });
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.remove = async (req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.json({ message: 'Feedback deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
