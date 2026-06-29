export type Theme = 'light' | 'dark';

export interface RSVP {
  name: string;
  attendance: 'hadir' | 'tidak' | 'ragu';
  guests: number;
  timestamp: string;
}

export interface Comment {
  id: string;
  name: string;
  message: string;
  timestamp: string;
  likes: number;
  isLikedByMe?: boolean;
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  locationName: string;
  address: string;
  mapUrl: string;
  calendarUrl: string;
}

export interface LoveStory {
  year: string;
  title: string;
  description: string;
}
