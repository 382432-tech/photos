import { Photo } from '../types';
import soccerKickoffImg from '../../images/soccer-kickoff.jpeg';
import soccer2Img from '../../images/soccer-2.jpeg';
import soccer3Img from '../../images/soccer-3.jpg';
import volleyball1Img from '../../images/volleyball-1.jpg';
import volleyball2Img from '../../images/volleyball-2.jpeg';
import volleyball3Img from '../../images/volleyball-3.jpg';
import baseball1Img from '../../images/baseball-1.jpeg';
import baseball2Img from '../../images/baseball-2.jpeg';

export const PHOTO_ITEMS: Photo[] = [
  // Row 1: Soccer (1, 2, 3)
  {
    id: 'soccer-1',
    title: 'Match Kickoff',
    category: 'Soccer',
    imageUrl: soccerKickoffImg,
    placeholderAlt: 'Soccer ball on field',
    description: 'Official soccer match ball on the pitch.'
  },
  {
    id: 'soccer-2',
    title: 'Striker in Action',
    category: 'Soccer',
    imageUrl: soccer2Img,
    placeholderAlt: 'Soccer striker in action on the pitch',
    description: 'Dynamic World Cup match action on the field.'
  },
  {
    id: 'soccer-3',
    title: 'Super Cup Victory',
    category: 'Soccer',
    imageUrl: soccer3Img,
    placeholderAlt: 'Cristiano Ronaldo celebrating UEFA Super Cup with Real Madrid',
    description: 'Cristiano Ronaldo celebrating UEFA Super Cup triumph with Real Madrid.'
  },

  // Row 2: Volleyball (4, 5, 6)
  {
    id: 'volleyball-1',
    title: 'Championship Spike',
    category: 'Volleyball',
    imageUrl: volleyball1Img,
    placeholderAlt: 'Gilberto Godoy Filho attacking ball in Brazil vs Argentina volleyball match',
    description: 'Brazil vs Argentina classic volleyball spike action at the net.'
  },
  {
    id: 'volleyball-2',
    title: 'Net Battle',
    category: 'Volleyball',
    imageUrl: volleyball2Img,
    placeholderAlt: 'Volleyball player attacking above the net block',
    description: 'Intense aerial battle at the net between hitter and blockers.'
  },
  {
    id: 'volleyball-3',
    title: 'Team USA Action',
    category: 'Volleyball',
    imageUrl: volleyball3Img,
    placeholderAlt: 'USA Volleyball team player hitting during tournament play',
    description: 'High-flying USA Volleyball tournament action.'
  },

  // Row 3: Baseball (7, 8, 9)
  {
    id: 'baseball-1',
    title: 'Batter at Home Plate',
    category: 'Baseball',
    imageUrl: baseball1Img,
    placeholderAlt: 'Baseball batter waiting at home plate with bat ready',
    description: 'Focused batter positioned in the batter box tracking the incoming fastball.'
  },
  {
    id: 'baseball-2',
    title: 'Pitcher Mound Delivery',
    category: 'Baseball',
    imageUrl: baseball2Img,
    placeholderAlt: 'Baseball pitcher throwing a pitch from the mound',
    description: 'Full windup release delivering a high-speed strike across the strike zone.'
  },
  {
    id: 'baseball-3',
    title: 'Ball & Leather Glove',
    category: 'Baseball',
    imageUrl: 'https://images.unsplash.com/photo-1516731415730-0c607149933a?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Baseball sitting in a classic leather fielder glove',
    description: 'Classic stitched baseball resting in a worn leather glove on the dugout grass.'
  }
];
