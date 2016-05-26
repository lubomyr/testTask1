package atua.anddev.testtask1.dao.impl;

import atua.anddev.testtask1.dao.CompanyDAO;
import atua.anddev.testtask1.entity.Company;
import lombok.NoArgsConstructor;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@NoArgsConstructor
@Repository
public class CompanyDAOImpl implements CompanyDAO {

    @Autowired
    private SessionFactory sessionFactory;

    public void addCompany(Company company) {
        sessionFactory.getCurrentSession().save(company);
    }

    public Company getCompanyById(int id) {
        return sessionFactory.getCurrentSession().load(Company.class, id);
    }

    @SuppressWarnings("unchecked")
    public List<Company> getAllCompanies() {
        return sessionFactory.getCurrentSession().createQuery("from Company").list();
    }

    @SuppressWarnings("unchecked")
    public List<Company> getRootCompanies() {
        return sessionFactory.getCurrentSession().createQuery("select c from Company c where c.parent = null").list();
    }

    public List<Company> getChildrenCompanies(int companyId) {
        return sessionFactory.getCurrentSession().createQuery("select c from Company c where c.parent = :id").setParameter("id", companyId).list();
    }

    public void updateCompany(Company company) {
        sessionFactory.getCurrentSession().update(company);
    }

    public void deleteCompany(Company company) {
        sessionFactory.getCurrentSession().delete(company);
    }
}
