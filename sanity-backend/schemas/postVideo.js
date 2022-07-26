export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string"
    },
    {
      name: "video",
      title: "Video URL",
      // change to 'file' to upload files
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "userId",
      title: "UserId",
      type: "string"
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy"
    },
    {
      name: "likes",
      title: "Likes",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "user" }]
        }
      ]
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }]
    },
    {
      name: "topic",
      title: "Topic",
      type: "string"
    }
  ]
};
