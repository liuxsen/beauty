ALTER TABLE user MODIFY role int(2) DEFAULT 1 COMMENT '角色';

-- expenses 
-- 添加 字段
ALTER TABLE expenses ADD COLUMN `owner_id` int(11) DEFAULT NULL COMMENT '店长id';