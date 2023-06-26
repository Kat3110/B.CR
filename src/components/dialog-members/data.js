export const arraySelect = (isMe, isPm, isInvitations) => {
  return isPm || (!isMe && !isPm)
    ? [
        {
          value: 1,
          label: "PM",
        },
        {
          value: 2,
          label: "Member",
        },
        {
          value: 3,
          label: isInvitations || !isMe ? "Remove" : "Leave",
        },
      ]
    : [
        {
          value: 2,
          label: "Member",
        },
        {
          value: 3,
          label: "Leave",
        },
      ];
};
