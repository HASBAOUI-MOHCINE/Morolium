import Track from '../models/Track.js';

export const getTracks = async (req, res) => {
  try {
    const tracks = await Track.find({});
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTrackById = async (req, res) => {
  try {
    const track = await Track.findOne({ id: req.params.id });
    if (track) {
      res.json(track);
    } else {
      res.status(404).json({ message: 'Track not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTrack = async (req, res) => {
  const { id, title, description, image } = req.body;

  try {
    const track = new Track({
      id,
      title,
      description,
      image,
      progress: 0,
      totalCourses: 0,
      completedCourses: 0
    });

    const createdTrack = await track.save();
    res.status(201).json(createdTrack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
