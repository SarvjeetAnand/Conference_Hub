// const Conference = require('../models/Conference');

// const getConferences = async (req, res) => {
//     try {
//         const conferences = await Conference.find();
//         res.json(conferences);
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// };

// const getConferenceByID = async (req, res) => {
//     try {
//         const conference = await Conference.findByID(req.params.id);
//         if(!conference) return res.status(404).json({
//             message: 'Conference not found'
//         });
//         res.json(conference); 
//     } catch (error) {

//         res.status(500).json({message:error.message});

//     }
// };

// const createConference = async (req, res) => {
//     const {title, date, schedule} = req.body;
//     try {
//         const newConference = new Conference({
//             title,
//             date,
//             schedule,
//         });
//         const conference = await newConference.save();

//         res.status(201).json(conference);
//     } catch (error) {
//         res.status(500).json({message:error.message});

//     }
// };

// const updateConference = async (req,res) => {
//     const {title, date, schedule}= req.body;

//     try {
//         const conference = await Conference.findByIDAndUpdate(
//             req.params.id, {
//                 title,date, schedule
//             },
//             {
//                 new : true
//             }
//         );
//         if(!conference) return res.status(404).json({
//             message: 'Conference not found'});
//     } catch (error) {
//         res.status(500).json({message:error.message});

//     }
// }

// const deleteConference = async (req, res) => {
//     try {
//         const conference = await Conference.findByIDAndDelete(req.params.id);
//         if(!conference) return res.status(404).json({
//             message: 'Conference not found'});
//     } catch (error) {
//         res.status(500).json({message:error.message});

//     }
// }


// const addFeedback = async (req,res) => {

//     const {comment} = req.body;
//     try {
//         const conference = await Conference.findByID(req.params.id);
//         if(!Conference) return res.status(404).json({
//             message: 'Conference not found'});

//         conference.feedback.push({comment});
//         await conference.save();
//         res.status(201).json(conference.feedback[conference.feedback.length-1]);

//     } catch (error) {
//         res.status(500).json({message:error.message});

//     }
// };

// module.exports = {
//     getConferenceByID,
//     getConferences,
//     createConference,
//     updateConference,
//     deleteConference,
//     addFeedback,
// };





const Conference = require('../models/Conference');

exports.getAll = async (req, res) => {
    try {
        const conferences = await Conference.find().populate('attendees', 'name email');
        res.json(conferences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.getOne = async (req, res) => {
    try {
        const conference = await Conference.findById(req.params.id).populate('attendees');
        res.json(conference);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.create = async (req, res) => {
    try {
        const conf = await Conference.create(req.body);
        res.status(201).json(conf);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.update = async (req, res) => {
    try {
        const updated = await Conference.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.remove = async (req, res) => {
    try {
        await Conference.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.registerUser = async (req, res) => {
    try {
        const conf = await Conference.findById(req.params.id);
        if (!conf.attendees.includes(req.user._id)) {
            conf.attendees.push(req.user._id);
            await conf.save();
        }
        res.json(conf);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


exports.getAllRegistrations = async (req, res) => {
    try {
      const conferences = await Conference.find()
        .populate('attendees', 'name email');
  
      const result = conferences.map(conf => ({
        title: conf.title,
        date: conf.date,
        location: conf.location,
        attendees: conf.attendees,
      }));
  
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch registrations', error: err.message });
    }
  };
  
