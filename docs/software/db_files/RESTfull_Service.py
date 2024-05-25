from flask import Flask, jsonify, request
from psycopg2 import errors

import connection_to_db
import get_data_from_db
import insert_data_to_db

app = Flask(__name__)


@app.route('/get_data', methods=['GET'])
def get_data():
    with connection_to_db.conn.cursor() as cur:
        data = get_data_from_db.get_all_data(cur)
    return jsonify(data)


@app.route('/registration', methods=['POST'])
def insert_new_data():
    request_data = request.get_json()
    login = request_data.get('login')
    first_name = request_data.get('first_name')
    last_name = request_data.get('last_name')
    password = request_data.get('password')
    email = request_data.get('email')
    role_id = request_data.get('role_id')
    if login and first_name and last_name and password and email and role_id:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.insert_data(cur, login, first_name, last_name, password, email, role_id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({'error': str(e)}), 400
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


@app.route('/login', methods=['POST'])
def login_user():
    request_data = request.get_json()
    password = request_data.get('password')
    email = request_data.get('email')
    if password and email:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.log(cur, password, email)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({'error': str(e)}), 400
        except TypeError:
            return jsonify({"error": "This user doesnt exist!"})
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


@app.route('/change_permissions', methods=['POST'])
def change_permissions():
    request_data = request.get_json()
    role_id = request_data.get('role_id')
    email = request_data.get('email')
    email_admin = request_data.get('email_admin')
    password_admin = request_data.get('password_admin')
    if role_id and email and email_admin and password_admin:
        try:
            with connection_to_db.conn.cursor() as cur:
                data = insert_data_to_db.change_per(cur, email, email_admin, password_admin, role_id)
            return jsonify(data)
        except (errors.InvalidTextRepresentation, ValueError, errors.InFailedSqlTransaction,
                errors.StringDataRightTruncation) as e:
            return jsonify({'error': str(e)}), 400
        except TypeError:
            return jsonify({'error': "This user doesnt exist! Change your email, or users"})
        finally:
            connection_to_db.conn.rollback()
    else:
        return jsonify({'error': 'Missing parameters'}), 400


if __name__ == '__main__':
    app.run()


