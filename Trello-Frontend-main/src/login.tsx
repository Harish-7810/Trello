
export const login = async (creds: {
    username: string;
    password: string;
  }): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (creds.username === "Khaleem" && creds.password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };
  