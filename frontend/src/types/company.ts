//覚えなくていいです。

export type Company = {
  id: number;
  name: string;
  media: string | null;
  priority: string | null;
  status: string | null;
  appliedDate: string | null;
  interviewDate: string | null;
  jobUrl: string | null;
  interviewUrl: string | null;
  memo: string | null;
  nextAction: string | null;
  isFavorite: boolean;
};

export type CompanyForm = {
  name: string;
  media: string;
  priority: string;
  status: string;
  job_url: string;
  applied_date: string;
  memo: string;
};

export type Option = {
  value: string;
  label: string;
};
