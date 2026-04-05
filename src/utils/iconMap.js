import {
  SiDocker,
  SiFastapi,
  SiGithub,
  SiGooglecloud,
  SiHuggingface,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import {
  HiCircleStack,
  HiCpuChip,
  HiLink,
  HiOutlineEnvelope,
  HiSparkles,
} from "react-icons/hi2";
import {
  FaAws,
  FaBrain,
  FaLinkedinIn,
  FaRobot,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { TbChartDots3, TbTopologyStar3 } from "react-icons/tb";

export const skillIconMap = {
  python: SiPython,
  brain: FaBrain,
  layers: HiCpuChip,
  tensorflow: SiTensorflow,
  huggingface: SiHuggingface,
  scikitlearn: SiScikitlearn,
  sparkles: HiSparkles,
  bot: FaRobot,
  wand: FaWandMagicSparkles,
  database: HiCircleStack,
  link: HiLink,
  graph: TbChartDots3,
  fastapi: SiFastapi,
  docker: SiDocker,
  aws: FaAws,
  gcp: SiGooglecloud,
  linux: SiLinux,
  github: SiGithub,
  vector: TbTopologyStar3,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  sql: SiMysql,
};

export const contactIconMap = {
  mail: HiOutlineEnvelope,
  linkedin: FaLinkedinIn,
  github: SiGithub,
};
