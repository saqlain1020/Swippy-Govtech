const socials = [
  "instagram",
  "snapchat",
  "twitter",
  "facebook",
  "linkedin",
  "message",
  "spotify",
  "tiktok",
  "whatsapp",
  "link",
];

export const userNameToUrl = (username, type) => {
  let url = "";
  if (type === "instagram") url = `https://www.instagram.com/${username}`;
  if (type === "snapchat") url = `https://www.snapchat.com/add/${username}`;
  if (type === "twitter") url = `https://www.twitter.com/${username}`;
  if (type === "facebook") url = `https://www.facebook.com/${username}`;
  if (type === "linkedin") url = `https://www.linkedin.com/in/${username}`;
  if (type === "message") url = `tel:${username}`;
  if (type === "spotify") url = `https://spoti.fi/${username}`;
  if (type === "tiktok") url = `https://tiktok.com/@${username}`;
  if (type === "whatsapp") url = `https://wa.me/${username}`;
  if (type === "link") url = `${username}`;

  console.log(url);
  return url;
};
