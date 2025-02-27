import { useState, useEffect } from "react";
import { searchGithubUser } from "../api/API";


type Props = {
  usernames: string[];
}

const SavedCandidates = ({ usernames }: Props) => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const loadedUsers: any[] = []

      for (let ii = 0; ii < usernames.length; ii++) {
        const username = usernames[ii];
        const user = await searchGithubUser(username);
        
        if (user) {
          loadedUsers.push(user);
        }
      }
      return loadedUsers;
    };

    init()
      .then((result) => {
        setUsers(result);
      })
      .catch((err) => {
        console.log("🚀 Unable to find users:", err)
      });
  }, [usernames]);

  const handleRemoveUser = (userId: number) => {
    const clonedUsers = [...users];

    const userIndex = clonedUsers.findIndex(u => u.id === userId);
    if (userIndex === undefined) {
      return;
    }
    clonedUsers.splice(userIndex, 1)

    setUsers(clonedUsers);

  };

  return (
    <div>
      <h1>Potential Candidates</h1>
    </div>
  );
};

export default SavedCandidates;
