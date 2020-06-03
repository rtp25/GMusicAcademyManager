package net.codesol.GMusicAcademyManager;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "session")
public class Session {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer session_id;
	private Integer instrument_id;
	private Integer instructor_id;
	private Integer student_id;
	private float cost;
	private String time;
	private Date date;
	
	public Session() {
		
	}
	
	
	public Session(Integer session_id, Integer instrument_id, Integer instructor_id, Integer student_id, float cost,
			String time, Date date) {
		this.session_id = session_id;
		this.instrument_id = instrument_id;
		this.instructor_id = instructor_id;
		this.student_id = student_id;
		this.cost = cost;
		this.time = time;
		this.date = date;
	}
	public Integer getsession_id() {
		return session_id;
	}
	public void setsession_id(Integer session_id) {
		this.session_id = session_id;
	}
	public Integer getinstrument_id() {
		return instrument_id;
	}
	public void setinstrument_id(Integer instrument_id) {
		this.instrument_id = instrument_id;
	}
	public Integer getinstructor_id() {
		return instructor_id;
	}
	public void setinstructor_id(Integer instructor_id) {
		this.instructor_id = instructor_id;
	}
	public Integer getstudent_id() {
		return student_id;
	}
	public void setstudent_id(Integer student_id) {
		this.student_id = student_id;
	}
	public float getCost() {
		return cost;
	}
	public void setCost(float cost) {
		this.cost = cost;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	

}
