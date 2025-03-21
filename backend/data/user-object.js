export function fetchUser() {
  const user = {
    id: 1,
    email: 'lolangmalatek@gmail.com',
    username: '@lolaMo_Ange_69',
    password: 'hello_world',

    cover: '../../public/user-uploads/cover-photos/cover-photo-1.jpg',
    photo: '../../public/user-uploads/profile-pictures/random-woman-3.jpg',

    firstName: 'Angelica',
    lastName: 'Parilla',
    country: 'Philippines',
    birthdate: new Date("1953-01-19"),
    age: 69,
    description: 'Come over and read my diaries! It will surely give you the peace of mind that you deserve.',

    stats: {
      diariesCount: 8,
      reviewsCount: 69,
    },
  };
  return user;
}

