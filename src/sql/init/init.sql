-- 用户表
CREATE TABLE  IF NOT EXISTS  `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `name` varchar(255) DEFAULT NULL COMMENT '名字',
  `nick` varchar(255) DEFAULT NULL COMMENT '昵称',
  `sex` int(2) DEFAULT 0 COMMENT '性别',
  `phone` varchar(20) DEFAULT NULL COMMENT '手机',
  `wx_id` varchar(20) DEFAULT NULL COMMENT '微信id',
  `role` int(2) DEFAULT NULL COMMENT '角色: 1 普通用户 2 vip 3 店长 4 职员',
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 店铺
CREATE TABLE  IF NOT EXISTS  `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '店铺名',
  `desc` varchar(100) DEFAULT NULL COMMENT '店铺描述', 
  `shop_avatar` varchar(255) DEFAULT NULL COMMENT '店铺头像',
  `shop_owner_id` int(11) DEFAULT NULL COMMENT '店铺所有者id',
  `rent` int(11) DEFAULT NULL COMMENT '房子租金',
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 支出
CREATE TABLE  IF NOT EXISTS  `expenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) DEFAULT NULL COMMENT '店铺id',
  `name` varchar(255) DEFAULT NULL COMMENT '原料名称',
  `original_price` int(10) DEFAULT NULL COMMENT '原价',
  `retail_price` int(10) DEFAULT NULL COMMENT '零售价',
  `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

