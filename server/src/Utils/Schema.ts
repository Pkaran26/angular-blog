const User = {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  about: string,
  is_active: boolean,
  is_blocked: boolean,
  is_admin: boolean,
  created_At: date,
}

db.createCollection("user", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "first_name", "last_name", "email", "password" ],
         properties: {
            first_name: {
               bsonType: "string",
               description: "required"
            },
            last_name: {
               bsonType: "string",
               description: "required"
            },
            email: {
               bsonType: "string",
               description: "required"
            },
            password: {
               bsonType: "string",
               description: "required"
            },
         }
      }
   }
})

const Blog = {
  title: string,
  body: string,
  tags: : array<string>,
  author: user,
  created_At: date,
  published_At: date,
  status: string,
}

db.createCollection("blog", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "title", "body", "tags", "author" ],
         properties: {
            title: {
               bsonType: "string",
               description: "required"
            },
            body: {
               bsonType: "string",
               description: "required"
            },
            tags: {
               bsonType: "string",
               description: "required"
            },
            author: {
               bsonType: "string",
               description: "required"
            },
         }
      }
   }
})
