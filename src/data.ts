import { WeddingEvent, LoveStory, Comment } from './types';

// Import images from generated assets
import heroImg from './assets/images/wedding_couple_hero_1782703345782.jpg';
import groomImg from './assets/images/groom_portrait_1782703362863.jpg';
import brideImg from './assets/images/bride_portrait_1782703380411.jpg';
import ringsImg from './assets/images/wedding_rings_1782703394441.jpg';
import decorImg from './assets/images/wedding_decor_1782703411413.jpg';

export const weddingImages = {
  hero: heroImg,
  groom: groomImg,
  bride: brideImg,
  rings: ringsImg,
  decor: decorImg,
};

export const weddingInfo = {
  groom: {
    nickname: 'Ajis',
    fullName: 'Ajis Pratama',
    parents: 'Putra Pertama dari Bapak Hadi Pratama & Ibu Sri Handayani',
    instagram: 'ajispratama',
    photo: groomImg,
  },
  bride: {
    nickname: 'Amel',
    fullName: 'Amel Zahrani',
    parents: 'Putri Pertama dari Bapak Dedi Zulkarnain & Ibu Nur Aisyah',
    instagram: 'amelzahrani',
    photo: brideImg,
  },
  date: {
    formatted: 'Sabtu, 28 Juni 2026',
    day: '28',
    month: 'Juni',
    year: '2026',
    time: '08:00 WIB',
    isoString: '2026-06-28T08:00:00+07:00',
  },
  hashtag: '#AjisAmelForever',
  musicUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Backup high-quality audio
  // We can use a direct royal-copyright-free wedding instrumental for "A Thousand Years" piano cover or similar,
  // let's use a beautiful, reliable piano instrumental MP3
  pianoMusicUrl: 'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3',
};

export const weddingEvents: { akad: WeddingEvent; resepsi: WeddingEvent } = {
  akad: {
    title: 'Akad Nikah',
    date: 'Sabtu, 28 Juni 2026',
    time: '08.00 WIB - Selesai',
    locationName: 'Masjid Agung Al-Ikhlas',
    address: 'Jl. Merdeka No. 10, Jakarta Selatan',
    mapUrl: 'https://maps.google.com/?q=Masjid+Agung+Al-Ikhlas+Jl+Merdeka+No+10+Jakarta+Selatan',
    calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Ajis+and+Amel&dates=20260628T010000Z/20260628T030000Z&details=Pernikahan+Ajis+and+Amel&location=Masjid+Agung+Al-Ikhlas,+Jl.+Merdeka+No.+10,+Jakarta+Selatan',
  },
  resepsi: {
    title: 'Resepsi Pernikahan',
    date: 'Sabtu, 28 Juni 2026',
    time: '11.00 - 15.00 WIB',
    locationName: 'The Grand Ballroom',
    address: 'Jl. Sudirman No. 28, Jakarta Selatan',
    mapUrl: 'https://maps.google.com/?q=The+Grand+Ballroom+Jl+Sudirman+No+28+Jakarta+Selatan',
    calendarUrl: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Ajis+and+Amel&dates=20260628T040000Z/20260628T080000Z&details=Resepsi+Pernikahan+Ajis+and+Amel&location=The+Grand+Ballroom,+Jl.+Sudirman+No.+28,+Jakarta+Selatan',
  },
};

export const loveStories: LoveStory[] = [
  {
    year: '2022',
    title: 'Pertemuan Pertama',
    description: 'Tuhan mempertemukan kami di sebuah seminar literasi. Percakapan hangat tentang buku favorit dan pandangan hidup menjadi benih awal kedekatan kami yang penuh kebetulan manis.',
  },
  {
    year: '2024',
    title: 'Menjalin Komitmen',
    description: 'Setelah dua tahun tumbuh bersama sebagai sahabat yang saling mendukung, kami memantapkan langkah untuk saling berkomitmen penuh, mengikat janji untuk berjuang bersama menuju masa depan.',
  },
  {
    year: '2026',
    title: 'Hari Bahagia (Pernikahan)',
    description: 'Dengan restu dari kedua orang tua dan tekad yang suci, kami bersiap mengikrarkan janji suci pernikahan di hadapan Allah SWT, memulai babak baru sebagai sepasang suami istri.',
  },
];

export const initialComments: Comment[] = [
  {
    id: 'c1',
    name: 'Andi & Keluarga',
    message: 'Selamat menempuh hidup baru Ajis & Amel, semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Lancar dan berkah ya acaranya sampai hari H! Aamiin.',
    timestamp: '2026-06-28T09:15:00Z',
    likes: 12,
  },
  {
    id: 'c2',
    name: 'Budi',
    message: 'Semoga lancar sampai hari H dan seterusnya. Bahagia selalu ya kalian berdua! Terharu akhirnya sampai di titik ini.',
    timestamp: '2026-06-28T09:40:00Z',
    likes: 8,
  },
  {
    id: 'c3',
    name: 'Siti Nurhaliza',
    message: 'MasyaAllah, ikut berbahagia sekali mendengar kabar gembira ini! Selamat menempuh hidup baru, semoga sakinah senantiasa menyelimuti rumah tangga kalian.',
    timestamp: '2026-06-28T10:02:00Z',
    likes: 7,
  },
  {
    id: 'c4',
    name: 'Hendra Setiawan',
    message: 'Selamat bro Ajis! Mantap akhirnya sah. Semoga selalu diberkahi kemudahan dan kebahagiaan dalam melangkah bersama Amel.',
    timestamp: '2026-06-28T10:30:00Z',
    likes: 5,
  },
];

export const giftAccounts = [
  {
    id: 'bca',
    bankName: 'BCA',
    accountNumber: '1234567890',
    accountHolder: 'Ajis Pratama',
    logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=200&auto=format&fit=crop', // Abstract gold pattern card background
  },
  {
    id: 'mandiri',
    bankName: 'Bank Mandiri',
    accountNumber: '0987654321',
    accountHolder: 'Amel Zahrani',
    logo: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=200&auto=format&fit=crop',
  },
];
