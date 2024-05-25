def get_all_data(cur):
    cur.execute('''SELECT * FROM "Users"''')
    get_data = cur.fetchall()
    cur.close()
    return {'data': get_data}
