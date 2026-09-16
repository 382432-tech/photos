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
    placeholderAlt: 'Soccer ball on field ready for kickoff',
    description: 'Official soccer match ball on the pitch.',
    paragraph: 'The match kickoff marks the ceremonial and tactical beginning of every association football contest, placed neatly on the center spot as twenty-two players take their precise formations across the pitch. Under official IFAB laws of the game, the opening whistle unleashes ninety minutes of endurance, strategic pressing, and ball possession, setting the tempo for the dramatic tactical chess match played across pristine natural grass in front of tens of thousands of roaring supporters.',
    linkUrl: 'https://en.wikipedia.org/wiki/Association_football',
    linkLabel: 'Association Football History & Rules'
  },
  {
    id: 'soccer-2',
    title: 'Striker in Action',
    category: 'Soccer',
    imageUrl: soccer2Img,
    placeholderAlt: 'Soccer striker in action on the pitch',
    description: 'Dynamic World Cup match action on the field.',
    paragraph: 'A legendary forward displaying world-class athletic prowess, rapid acceleration, and clinical goal-scoring instincts on the international stage. Modern strikers balance intricate off-the-ball runs with explosive physical strength, terrorizing defensive lines through high-flying aerial leaps and surgical finishing inside the penalty box that have defined championship eras and inspired millions of aspiring footballers worldwide.',
    linkUrl: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo',
    linkLabel: 'Cristiano Ronaldo Career & Honors'
  },
  {
    id: 'soccer-3',
    title: 'Super Cup Victory',
    category: 'Soccer',
    imageUrl: soccer3Img,
    placeholderAlt: 'Cristiano Ronaldo celebrating UEFA Super Cup with Real Madrid',
    description: 'Cristiano Ronaldo celebrating UEFA Super Cup triumph with Real Madrid.',
    paragraph: 'Cristiano Ronaldo hoisted the prestigious UEFA Super Cup trophy wearing the iconic white kit of Real Madrid, celebrating another triumphant continental conquest against European elite rivals. The UEFA Super Cup serves as the annual marquee showdown pitting the reigning Champions League winners against the Europa League titlists, marking a pinnacle achievement in club football history with golden medals and celebratory champagne.',
    linkUrl: 'https://en.wikipedia.org/wiki/UEFA_Super_Cup',
    linkLabel: 'UEFA Super Cup History & Records'
  },

  // Row 2: Volleyball (4, 5, 6)
  {
    id: 'volleyball-1',
    title: 'Championship Spike',
    category: 'Volleyball',
    imageUrl: volleyball1Img,
    placeholderAlt: 'Gilberto Godoy Filho attacking ball in Brazil vs Argentina volleyball match',
    description: 'Brazil vs Argentina classic volleyball spike action at the net.',
    paragraph: 'Gilberto Amauri de Godoy Filho, famously known across the globe as Giba, elevates high above the net to deliver a thunderous spike during an intense South American derby between Brazil and Argentina. Widely revered as one of the greatest outside hitters in volleyball history, Giba captained Brazil through an extraordinary golden era that clinched Olympic Gold and three consecutive World Championship crowns with unmatched charisma and devastating vertical power.',
    linkUrl: 'https://en.wikipedia.org/wiki/Giba',
    linkLabel: 'Gilberto Godoy Filho (Giba) Biography'
  },
  {
    id: 'volleyball-2',
    title: 'Net Battle',
    category: 'Volleyball',
    imageUrl: volleyball2Img,
    placeholderAlt: 'Volleyball player attacking above the net block',
    description: 'Intense aerial battle at the net between hitter and blockers.',
    paragraph: 'The dynamic aerial confrontation at the net epitomizes the raw speed and reflex-driven defense of competitive volleyball, where attackers attempt to blast through a two-person or three-person defensive wall. Within mere split seconds, blockers coordinate their hand positioning to seal off angles, while back-row defenders anticipate deflections to keep the rally alive in a breathless demonstration of team synergy and athletic timing.',
    linkUrl: 'https://en.wikipedia.org/wiki/Volleyball',
    linkLabel: 'FIVB Volleyball Rules & Net Dynamics'
  },
  {
    id: 'volleyball-3',
    title: 'Team USA Action',
    category: 'Volleyball',
    imageUrl: volleyball3Img,
    placeholderAlt: 'USA Volleyball team player hitting during tournament play',
    description: 'High-flying USA Volleyball tournament action.',
    paragraph: 'Representing the stars and stripes on the global stage, USA Volleyball athletes showcase relentless vertical leaps, precision jump serving, and resilient floor defense against top international adversaries. Governed by USA Volleyball and competing in premier tournaments like the FIVB Nations League and the Olympic Games, the national program has cultivated generations of Olympic medalists recognized for exceptional tactical discipline and offensive firepower.',
    linkUrl: 'https://usavolleyball.org',
    linkLabel: 'USA Volleyball National Team Portal'
  },

  // Row 3: Baseball (7, 8, 9)
  {
    id: 'baseball-1',
    title: 'Batter at Home Plate',
    category: 'Baseball',
    imageUrl: baseball1Img,
    placeholderAlt: 'Baseball batter waiting at home plate with bat ready',
    description: 'Focused batter positioned in the batter box tracking the incoming fastball.',
    paragraph: 'Stepping into the batter\'s box, a hitter enters a duel of pure hand-eye coordination and lightning-fast reflexes against pitchers hurling ninety-five mile per hour fastballs and sharp breaking sliders. With the game on the line and dust kicking up around home plate, the batter reads subtle fingertip rotations within milliseconds, cocking the bat to drive the ball deep into the gaps or over the outfield fences for a clutch extra-base hit.',
    linkUrl: 'https://www.mlb.com',
    linkLabel: 'Major League Baseball (MLB) Official'
  },
  {
    id: 'baseball-2',
    title: 'Pitcher Mound Delivery',
    category: 'Baseball',
    imageUrl: baseball2Img,
    placeholderAlt: 'Baseball pitcher throwing a pitch from the mound',
    description: 'Full windup release delivering a high-speed strike across the strike zone.',
    paragraph: 'Perched atop the sixty-foot-six-inch mound, the pitcher executes a biomechanically precise windup, transferring explosive kinetic energy from the rubber through the hips and shoulder into a stinging release. Master pitchers command an arsenal of seam-gripping two-seamers, changeups, and sweeping curveballs designed to disrupt hitter timing, paint the corners of the strike zone, and dictate the tempo of every nine-inning contest.',
    linkUrl: 'https://en.wikipedia.org/wiki/Pitcher',
    linkLabel: 'Baseball Pitching Mechanics & Pitches'
  },
  {
    id: 'baseball-3',
    title: 'Ball & Leather Glove',
    category: 'Baseball',
    imageUrl: 'https://images.unsplash.com/photo-1516731415730-0c607149933a?auto=format&fit=crop&w=800&q=80',
    placeholderAlt: 'Baseball sitting in a classic leather fielder glove',
    description: 'Classic stitched baseball resting in a worn leather glove on the dugout grass.',
    paragraph: 'The iconic hand-crafted leather glove holding a red-stitched baseball embodies the timeless heritage, sensory nostalgia, and artisanal craftsmanship of America\'s pastime. Broken in over countless seasons of catches, double plays, and diving line-drive grabs, the fielder\'s glove is every player\'s trusted extension on the diamond, resting quietly between innings on the dugout grass beneath summer stadium lights.',
    linkUrl: 'https://en.wikipedia.org/wiki/Baseball_glove',
    linkLabel: 'Baseball Glove History & Craftsmanship'
  }
];
