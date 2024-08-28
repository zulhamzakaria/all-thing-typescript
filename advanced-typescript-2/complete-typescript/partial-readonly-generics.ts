interface UserSettings {
  userName: string;
  email: string;
  darkMode: boolean;
  language: string;
}

function updateUserSettings(partialSettings: Partial<UserSettings>) {
  console.log(partialSettings);
}

const user: UserSettings = {
  userName: "grakk",
  email: "grakk@hon.com",
  darkMode: false,
  language: "gb-en",
};

const newSettings: Partial<UserSettings> = {
  darkMode: true,
  language: "us-en",
};

const userSettins: Readonly<Partial<UserSettings>> = {
  userName: "marypelkins",
  email: "m.pelkins@red.com",
};


updateUserSettings(newSettings);
