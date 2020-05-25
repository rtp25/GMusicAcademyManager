package net.codesol.GMusicAcademyManager;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Session {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sessionId;
	private Integer instrumentId;
	private Integer instructorId;
	private Integer studentId;
	private float cost;
	private String time;
	private String date;
	
	
	
	
	public Session(Integer sessionId, Integer instrumentId, Integer instructorId, Integer studentId, float cost,
			String time, String date) {
		this.sessionId = sessionId;
		this.instrumentId = instrumentId;
		this.instructorId = instructorId;
		this.studentId = studentId;
		this.cost = cost;
		this.time = time;
		this.date = date;
	}
	public Integer getSessionId() {
		return sessionId;
	}
	public void setSessionId(Integer sessionId) {
		this.sessionId = sessionId;
	}
	public Integer getInstrumentId() {
		return instrumentId;
	}
	public void setInstrumentId(Integer instrumentId) {
		this.instrumentId = instrumentId;
	}
	public Integer getInstructorId() {
		return instructorId;
	}
	public void setInstructorId(Integer instructorId) {
		this.instructorId = instructorId;
	}
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	
	

}
