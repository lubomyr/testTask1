package atua.anddev.testtask1.service.impl;

import atua.anddev.testtask1.dao.CompanyDAO;
import atua.anddev.testtask1.entity.Company;
import atua.anddev.testtask1.service.CompanyService;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyDAO companyDAO;

    @Transactional
    public void addCompany(Company company) {
        companyDAO.addCompany(company);
    }

    @Transactional
    public Company getCompanyById(int id) {
        return companyDAO.getCompanyById(id);
    }

    @Transactional
    public List<Company> getAllCompanies() {
        return companyDAO.getAllCompanies();
    }

    @Transactional
    public List<Company> getRootCompanies() {
        return companyDAO.getRootCompanies();
    }

    @Transactional
    public void updateCompany(Company company) {
        companyDAO.updateCompany(company);
    }

    @Transactional
    public void deleteCompany(Company company) {
        companyDAO.deleteCompany(company);
    }

    @Transactional
    public List<Company> getCompaniesWithParent(int id) {
        List<Company> parents = new ArrayList<Company>();
        Company child = getCompanyById(id);
        while (child.getParent() != null) {
            Company parent = child.getParent();
            parents.add(parent);
            child = parent;
        }
        return parents;
    }

    @Transactional
    public List<Company> getCompaniesWithChildren(int id) {
        List<Company> children = new ArrayList<Company>();
        children.addAll(getCompanyById(id).getChildren());
        boolean repeat = true;
        while (repeat) {
            repeat = false;
            Set<Company> temp = new HashSet<Company>();
            for (Company c : children) {
                if (!children.containsAll(c.getChildren()) && c.getChildren().size() != 0) {
                    repeat = true;
                    temp.addAll(c.getChildren());
                }
            }
            children.addAll(temp);
        }
        return children;
    }

    @Transactional
    public void calcTotalEarnings() {
        List<Company> companies = getAllCompanies();
        for (Company company: companies) {
            List<Company> compWithChildren = getCompaniesWithChildren(company.getId());
            long sum = company.getEstimateEarnings();
            for (Company childs: compWithChildren) {
                sum += childs.getEstimateEarnings();
            }
            company.setTotalEarnings(sum);
        }
    }
}
