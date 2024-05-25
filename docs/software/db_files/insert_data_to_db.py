from psycopg2 import errors
import connection_to_db

def insert_data(cur, login, first_name, last_name, password, email, role_id):
    try:
        cur.execute(f'''SELECT email FROM "Users" ''')
        get_data = cur.fetchall()
        for i in get_data:
            if email == i[0]:
                return {'data': "You already have an account"}


        cur.execute('SELECT MAX(id) FROM "Users" ')
        next_id = cur.fetchall()
        insert_data_to_db = (f'''INSERT INTO "Users"(
	                                 id, login, first_name, last_name, password, email, role_id)
                                     VALUES (%s, %s, %s, %s, %s, %s, %s)''')
        data = (next_id[-1][0]+1, login, first_name, last_name, password, email, role_id)
        cur.execute(insert_data_to_db, data)
        cur.connection.commit()
        return "User insert successful!"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    finally:
        cur.close()


def log(cur, password, email):
    try:
        cur.execute(f'''SELECT password, email FROM "Users" Where email = %s''', (email,))
        get_data = cur.fetchone()
        if get_data[0] == password:
            return "User login successful!"
        else:
            return "Password is wrong!"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()


def change_per(cur, email, email_admin, password_admin, role_id):
    try:
        with connection_to_db.conn.cursor() as cur2:
            log_admin = log(cur2, password_admin, email_admin)
        if log_admin == "Password is wrong!":
            return log_admin
        else:
            cur.execute(f'''SELECT role_id FROM "Users" Where email = %s''', (email_admin,))
            get_data1 = cur.fetchone()
            if get_data1[0] == 2:
                cur.execute(f'''SELECT role_id FROM "Users" Where email = %s''', (email,))
                get_data = cur.fetchone()
                if get_data[0] == role_id:
                    return "User already has this role!"
                else:
                    if role_id == 1:
                        cur.execute(f'''UPDATE "Users" SET role_id = 1 WHERE email = %s''', (email,))
                        cur.connection.commit()
                        return "You successefuly gave role 1"
                    elif role_id == 2:
                        cur.execute(f'''UPDATE "Users" SET role_id = 2 WHERE email = %s''', (email,))
                        cur.connection.commit()
                        return "You successefuly gave role 2"
            else:
                return "You have no permission for that"
    except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
            errors.StringDataRightTruncation) as e:
        raise e
    except TypeError:
        raise
    finally:
        cur.close()