import { createConnection } from "typeorm";
import { Post } from "./entity/Post";
import { Category } from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection()
  .then(async (connection) => {
    const category1 = new Category();
    category1.name = "TypeScript";
    await connection.manager.save(category1);

    const category2 = new Category();
    category2.name = "Programming";
    await connection.manager.save(category2);

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];

    await connection.manager.save(post);

    console.log("Post has been saved: ", post);

    await connection.close();
  })
  .catch((error) => console.log("Error: ", error));
