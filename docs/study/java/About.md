# :shaved_ice: 数据库
## :car: SQL连接查询
```sql
SELECT * FROM order_items 
  LEFT OUTER JOIN orders 
  ON order_items.order_id = orders.id
```

```sql
SELECT * FROM `A` INNER JOIN `B`
┌────────┐
│ A  ┌───┼────┐
│    │ ∩ │    │
└────┼───┘  B │
     └────────┘
内部联接	∩
左外连接	A + ∩
右外连接	∩ + B
完全外部联接	A + ∩ + B
```

## :car: select语句
```sql
SELECT * FROM table
SELECT * FROM table1, table2, ...
SELECT field1, field2, ... FROM table1, table2, ...
SELECT ... FROM ... WHERE condition
SELECT ... FROM ... WHERE condition GROUPBY field
SELECT ... FROM ... WHERE condition GROUPBY field HAVING condition2
SELECT ... FROM ... WHERE condition ORDER BY field1, field2
SELECT ... FROM ... WHERE condition ORDER BY field1, field2 DESC
SELECT ... FROM ... WHERE condition LIMIT 10
SELECT DISTINCT field1 FROM ...
SELECT DISTINCT field1, field2 FROM ...
```

## :car: select join
```sql
Select - Join
SELECT ... FROM t1 JOIN t2 ON t1.id1 = t2.id2 WHERE condition
SELECT ... FROM t1 LEFT JOIN t2 ON t1.id1 = t2.id2 WHERE condition
SELECT ... FROM t1 JOIN (t2 JOIN t3 ON ...) ON ...
```

# :shaved_ice: MyBatis中Like语句

## :car: 原生写法

```sql
select * from user where username like '%${value}%'
```

注意： 
    `${value}`里面必须要写`value`，不然会报错

## :car: `oracle`数据库：

```sql
SELECT *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

或 :

```sql
SELECT  *  FROM  user  WHERE  name like '%'||#{name}||'%'  
```

## :car: `SQLServer`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like '%'+#{name}+'%'  
```

## :car: `mysql`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

## :car: `DB2`数据库：

```sql
SELECT  *  FROM  user  WHERE  name like CONCAT('%',#{name},'%')  
```

或

```sql
SELECT  *  FROM  user  WHERE  name like '%'||#{name}||'%'  
```

## :car: 示例

```xml
  <select id="queryRiskFlow" parameterType="java.util.Map" resultMap="FormRiskVo">
        SELECT A.PROC_INST_ID_ ,B.STATUS_,B.PROC_DEF_ID_,C.* FROM
            BPM_BUS_LINK A,BPM_PRO_INST B,FORM_RISK C
            where A.PROC_INST_ID_ = B.ID_
             AND A.BUSINESSKEY_STR_ = C.ID_
        <if test="name!=null">
            AND C.NAME LIKE '%' || #{name} ||'%'
        </if>
        <if test="orderBySql!=null">
            ORDER BY ${orderBySql}
        </if>
        <if test="orderBySql==null">
            ORDER BY C.ID_ DESC
        </if>
    </select>
```

