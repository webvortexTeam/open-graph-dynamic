type userType = {
  name: string;
  image: string;
  username: string;
};

export type openGraphInputType = {
  title: string;
  tags?: Array<string>;
  timestamp?: string;
  url: string;
  user: userType;
  limitText?: number;
};

export type openGraphOutputType = {
  source: string;
};
