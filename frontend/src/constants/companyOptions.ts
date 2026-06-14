import type { Option } from "../types/company";

//志望度
export const priorityOptions: Option[] = [
  { value: "5.0", label: "5.0 大本命" },
  { value: "4.5", label: "4.5 本命" },
  { value: "4.0", label: "4.0 かなり興味ある" },
  { value: "3.5", label: "3.5 検討" },
  { value: "3.0", label: "3.0 普通" },
  { value: "2.5", label: "2.5 補欠" },
  { value: "2.0", label: "2.0 低め" },
  { value: "1.5", label: "1.5 低" },
  { value: "1.0", label: "1.0 とりあえず(練習)" },
];

//選考状況

export const statusOptions: string[] = [
  "応募済み",
  "書類選考待ち",
  "書類通過",
  "面談日程調整中",
  "面談予定",
  "面談後返答待ち",
  "内定",
  "辞退",
  "落選",
];
